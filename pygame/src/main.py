from game import Game

import pygame


def main():
    """
    Main function to run the game
    """

    pygame.init()
    game = Game()
    game.run()


if __name__ == "__main__":
    main()
