# Integrating with AdventureLandBots

This document explains how to integrate this UI with your [AdventureLandBots](https://github.com/probablyanocelot/AdventureLandBots) repository.

## Overview

The AdventureLand Bot Monitor provides a real-time UI for monitoring and controlling your AdventureLand MMORPG bots. The current implementation includes mock data, but it's designed to easily connect to your actual bot data.

## Integration Steps

### 1. API Connection

Create an API service to connect to your bot backend. Create a new file `lib/api.ts`:

```typescript
// lib/api.ts
export interface BotData {
  id: number;
  name: string;
  status: 'online' | 'offline' | 'idle';
  level: number;
  gold: number;
  hp: number;
  maxHp: number;
  mp: number;
  maxMp: number;
  x?: number;
  y?: number;
  map?: string;
}

export async function fetchBots(): Promise<BotData[]> {
  // Replace with your actual API endpoint
  const response = await fetch('YOUR_API_ENDPOINT/bots');
  return response.json();
}

export async function sendCommand(botId: number, command: string): Promise<void> {
  // Replace with your actual API endpoint
  await fetch(`YOUR_API_ENDPOINT/bots/${botId}/command`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ command })
  });
}
```

### 2. WebSocket Connection

For real-time updates, implement WebSocket connections:

```typescript
// lib/websocket.ts
export class BotWebSocket {
  private ws: WebSocket | null = null;
  private callbacks: Map<string, (data: any) => void> = new Map();

  connect(url: string) {
    this.ws = new WebSocket(url);
    
    this.ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const callback = this.callbacks.get(data.type);
      if (callback) callback(data);
    };
  }

  on(event: string, callback: (data: any) => void) {
    this.callbacks.set(event, callback);
  }

  send(message: any) {
    if (this.ws?.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(message));
    }
  }

  disconnect() {
    this.ws?.close();
  }
}
```

### 3. Update Dashboard Component

Modify `app/dashboard/page.tsx` to use the API:

```typescript
import { useEffect, useState } from 'react';
import { fetchBots, BotData } from '@/lib/api';

export default function Dashboard() {
  const [bots, setBots] = useState<BotData[]>([]);

  useEffect(() => {
    // Initial fetch
    fetchBots().then(setBots);

    // Set up polling or WebSocket for updates
    const interval = setInterval(() => {
      fetchBots().then(setBots);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Rest of component...
}
```

## Environment Variables

Create a `.env.local` file for configuration:

```bash
NEXT_PUBLIC_API_URL=https://your-bot-api.example.com
NEXT_PUBLIC_WS_URL=wss://your-bot-api.example.com/ws
```

## Security Considerations

1. **Authentication**: Implement API authentication (JWT, API keys, etc.)
2. **CORS**: Configure CORS properly on your backend
3. **Rate Limiting**: Add rate limiting to prevent abuse
4. **Input Validation**: Always validate commands before sending to bots

## Bot Backend Requirements

Your AdventureLandBots backend should expose:

1. **REST API Endpoints**:
   - `GET /api/bots` - List all bots
   - `GET /api/bots/:id` - Get specific bot details
   - `POST /api/bots/:id/command` - Send command to bot
   - `GET /api/bots/:id/logs` - Get bot activity logs

2. **WebSocket Events**:
   - `bot.update` - Real-time bot state updates
   - `bot.log` - Activity log messages
   - `bot.status` - Status changes (online, offline, idle)

## Example Bot Data Structure

```json
{
  "id": 1,
  "name": "Warrior Bot",
  "status": "online",
  "character": {
    "level": 42,
    "gold": 150000,
    "hp": 850,
    "maxHp": 1200,
    "mp": 450,
    "maxMp": 600,
    "x": 1234,
    "y": 5678,
    "map": "main"
  },
  "inventory": [
    { "name": "Health Potion", "quantity": 10 },
    { "name": "Epic Sword", "quantity": 1 }
  ]
}
```

## Next Steps

1. Set up your bot backend API
2. Configure environment variables
3. Implement the API service layer
4. Test the integration
5. Add more features (inventory view, skill management, etc.)
