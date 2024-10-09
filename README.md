

# Expense Tracker

### Description
This **Expense Tracker** allows users to track their daily expenses by adding, editing, and deleting expense items. It also calculates the total expenses and stores all data persistently using **local storage**, so that users can come back to their list even after refreshing the browser.

The application is designed with a **modern darkish bluish-violet theme** and is fully responsive, adjusting to different screen sizes including desktop and mobile. The app is developed using **Next.js** and styled using **CSS**. 

### Features
- Add new expense items with the name and amount.
- Edit and delete existing expense items.
- Display the total expenses in real-time.
- Persistent storage using **localStorage** to save expenses across sessions.
- Responsive design: Looks great on both mobile and desktop devices.
- Modern, intuitive UI with a dark-themed color palette.

### Project Structure
Here’s a breakdown of the files in this project:

- `pages/index.tsx`:
  - This file contains the core functionality of the Expense Tracker.
  - Includes state management for expense items, editing, deleting, and calculating the total.
  - Uses `useState` and `useEffect` hooks for state management and local storage interaction.

- `styles/global.css`:
  - Contains all the global styles used to design the Expense Tracker.
  - Implements a modern, responsive design with a dark bluish-violet background and yellow accent colors.
  - Ensures a clean, user-friendly interface across all devices.


### Technology Stack
- **Frontend Framework**: Next.js (React-based framework)
- **Styling**: CSS
- **State Management**: React hooks (`useState`, `useEffect`)
- **Persistent Storage**: Local Storage
- **Deployment**: Vercel (for easy and fast deployment)

### Installation and Setup

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/expense-tracker.git
   cd expense-tracker
   ```

2. **Install dependencies**:
   Run the following command to install the required dependencies:
   ```bash
   npm install
   ```

3. **Run the development server**:
   Start the Next.js development server by running:
   ```bash
   npm run dev
   ```

4. **Open the app**:
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the Expense Tracker in action.

---

### Deployment

You can easily deploy this project using **Vercel** (or any other hosting service). To deploy on Vercel, follow these steps:

1. Go to the [Vercel website](https://vercel.com/).
2. Create a new project and connect it to your GitHub repository.
3. Once linked, Vercel will automatically build and deploy your application.

---

### Screenshots

#### Desktop View:
- A clean interface with a modern dark theme, expense tracking functionality, and a real-time total calculation.
  
#### Mobile View:
- Fully responsive layout that adjusts perfectly to smaller screen sizes.

---

### Future Improvements
- Add filtering and sorting of expenses.
- Include the ability to categorize expenses (e.g., food, transport, etc.).
- Add charts to visualize spending trends.

### Author
Developed by **Yemna Mehmood**.

