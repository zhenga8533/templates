import os

from dotenv import load_dotenv

import pygame


class Game:
    def __init__(self):
        """
        Initialize the game
        """

        # Load the environment variables
        load_dotenv()
        self.width = int(os.getenv("SCREEN_WIDTH"))
        self.height = int(os.getenv("SCREEN_HEIGHT"))
        self.fps = int(os.getenv("FPS"))

        # Initialize the game
        self.screen = pygame.display.set_mode((self.width, self.height))
        self.clock = pygame.time.Clock()
        self.running = True

    def run(self) -> None:
        """
        Run the game loop

        :return: None
        """

        while self.running:
            self.clock.tick(self.fps)
            self.handle_events()
            self.update()
            self.draw()

    def handle_events(self) -> None:
        """
        Handle the events in the game

        :return: None
        """

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                self.running = False

        # Handle keyboard
        keys = pygame.key.get_pressed()
        if keys[pygame.K_ESCAPE]:
            self.running = False

        # Handle mouse
        click = pygame.mouse.get_pressed()
        if click[0]:
            pass
        elif click[2]:
            pass

    def update(self) -> None:
        """
        Update the game objects

        :return: None
        """

        pass

    def draw(self) -> None:
        """
        Draw the game objects on the screen

        :return: None
        """

        self.screen.fill((0, 0, 0))
        pygame.draw.circle(self.screen, (255, 255, 255), pygame.mouse.get_pos(), 10)
        pygame.display.flip()
