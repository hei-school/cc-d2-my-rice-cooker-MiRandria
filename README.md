# cc-d2-my-rice-cooker-MiRandria
cc-d2-my-rice-cooker-MiRandria created by GitHub Classroom
# Rice Cooker Application

## Overview

This is a simple rice cooker application written in TypeScript. It provides basic functionalities for cooking rice, including monitoring for overheating during the cooking process and ensuring the quality of the rice meets specified criteria.

## Functionalities:

- **Cook Rice (cuireRiz):**
  - Initiates the rice cooking process.
  - Monitors for overheating during the cooking process.
  - Ensures the quality of the rice meets specified criteria.
  - Example: `cuiseur.cuireRiz();`

- **Keep Warm (maintienChaud):**
  - Maintains the cooked rice warm for a specified duration.
  - Example: `cuiseur.maintienChaud();`

## Linter 
https://github.com/hei-school/cc-d2-my-rice-cooker-MiRandria/blob/feature/typescript/.eslintrc.js

To lint the TypeScript code, you can use a linter such as TSLint. Install it using the following command:
  - npm install tslint --save-dev

Run TSLint on your TypeScript files:
  - npx tslint your_rice_cooker_file.ts
  - Example: `npx tslint cuiserRice.ts`

## Note

- Adjust the temperature and quality criteria in the code according to your preferences or specific requirements.

Feel free to adapt the rice cooker application for other languages as needed.
