import os
from telethon import TelegramClient

api_id = int(os.environ.get("API_ID"))
api_hash = os.environ.get("API_HASH")
token = os.environ.get("TOKEN")

bot = TelegramClient('bot', api_id, api_hash).start(bot_token=token)

