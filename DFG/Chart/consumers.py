from channels.generic import websocket
from asyncio import sleep
import random
import json


class ChartConsumer(websocket.AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

        for i in range(10000):
            await self.send(json.dumps({"value": random.randint(-20, 20)}))
            await sleep(1)

    async def disconnect(self, code):
        pass
