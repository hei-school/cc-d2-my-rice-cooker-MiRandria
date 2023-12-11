# cc-d2-my-rice-cooker-MiRandria
cc-d2-my-rice-cooker-MiRandria created by GitHub Classroom
# Rice Cooker Application

## Overview

This is a simple rice cooker application written in Python. It provides basic functionalities for cooking rice, including monitoring for overheating during the cooking process and ensuring the quality of the rice meets specified criteria.

## Functionalities:

- **Cook Rice (`cuire_riz`):**
  - Initiates the rice cooking process.
  - Monitors for overheating during the cooking process.
  - Ensures the quality of the rice meets specified criteria.
  - Example: `cuiseur.cuire_riz`

- **Keep Warm (`maintien_chaud`):**
  - Maintains the cooked rice warm for a specified duration.
  - Example: `cuiseur.maintien_chaud`

## Linter for Python

For linting Python code, you can use a linter such as Flake8. Here's how you can set it up:

1. Install Flake8 using pip, the Python package manager:

    ```bash
    pip install flake8
    ```

2. Create a `.flake8` file at the root of your project with your preferred settings. Here's an example:

    ```ini
    [flake8]
    max-line-length = 120
    exclude = .git,__pycache__,venv
    ```

3. Run Flake8 in the terminal using the following command:

    ```bash
    flake8 .
    ```

4. Optionally, integrate Flake8 into your code editor for real-time feedback.

Feel free to adjust these instructions based on your specific project structure and preferences.
