from dotenv import load_dotenv
from util.logger import Logger
import logging
import os

if __name__ == "__main__":
    load_dotenv()
    LOG = os.getenv("LOG") == "True"

    logger = Logger("main", "logs/main.log", LOG)
    logger.log(logging.INFO, "Hello, world!")
