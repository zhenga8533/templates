import os

from dotenv import load_dotenv
from util.logger import Logger


def main(s: str) -> None:
    """
    Main function of the program.

    :param s: A string to print.
    :return: None
    """

    # Load environment variables
    load_dotenv()
    LOG = os.getenv("LOG") == "True"

    # Initialize logger
    logger = Logger("main", "logs/main.log", LOG)

    logger.info(s)


if __name__ == "__main__":
    main("Hello, World!")
