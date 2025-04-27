![f2](https://github.com/user-attachments/assets/42384d0f-bff5-4378-b5d7-df7f794fbe87)* `.vscode/`: Contains VS Code specific settings and configurations.

    * `pages/`: Contains the different views or screens of the application.
        * `Education.tsx`: Likely provides educational information about sleep and related conditions.
        * `Landing.tsx`: The main landing page of the application.
        * `NotFound.tsx`: Component displayed for 404 error pages.
        * `RealTime.tsx`: Probably handles the real-time PPG signal processing and display.
        * `SleepTracker.tsx`: The core component responsible for initiating and managing sleep tracking and analysis.
        * `userInfo.tsx`: Likely manages user profile information.
   

## Features
![f1](https://github.com/user-attachments/assets/6ef3aeb0-f411-420d-a296-0a9be3507703)
![f2](https://github.com/user-attachments/assets/cb2bd150-f2f9-4d8e-a637-b9cd3b3833d0)


* **Real-time PPG Signal Analysis:** Processes Photoplethysmography data to monitor physiological changes during sleep.
![f4](https://github.com/user-attachments/assets/c83e9892-5636-4b9e-89ea-ebd06b6b6a8d)
 
* **Sleep Stage Classification:** Identifies and categorizes different sleep stages (e.g., Light Sleep, Deep Sleep, REM).
* ![f3](https://github.com/user-attachments/assets/b73b1077-c315-4a60-b3b5-0714abd7e0c9)
* **Health Assessment:** Determines if sleep patterns are indicative of healthy sleep or potential issues like OSA, EDS, or snoring.

* **Sleep Stage Count:** Provides a detailed count of the duration of each identified sleep stage.
  ![f5](https://github.com/user-attachments/assets/a7ae53ed-73be-4105-a292-54ae170f08b0)

* **Oversleep Detection:** Identifies and quantifies periods of oversleeping.
* **Average Sleep Stage Duration:** Calculates the average time spent in each sleep stage during a sleep session.
 ![f6](https://github.com/user-attachments/assets/dfbfa057-819b-4f51-946e-4e50d3aa20c4)

* **Educational Resources:** Offers information about sleep health and related conditions.

## Technologies Used

* [React](https://react.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Vite](https://vitejs.dev/)
* [Tailwind CSS](https://tailwindcss.com/) (Likely, based on `tailwind.config.js`)
* [Potentially other libraries for PPG signal processing and analysis]

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

    This will likely start the application at `http://localhost:<port>`.

## Further Development

* **User Information Management:** Allows users to manage their profile and potentially relevant health information.
