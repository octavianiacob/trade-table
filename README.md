# trade-table

## Getting Started

The deployed project can be accesed at https://trade-table.vercel.app/

These instructions will get the project up and running on your local machine for development and testing purposes.

### Prerequisites
You need to have Node.js 18 and npm 8 installed on your machine. 

### Installation
1. Clone the repository to your local machine  
```git clone https://github.com/octavianiacob/trade-table.git```

2. Navigate into the repository directory  
```cd trade-table```

3. Install the dependencies  
```npm i```

### Usage

1. Run the development server  
```npm run dev```  
The app will be available at http://localhost:5173

2. Build the production version of the app  
```npm run build```  
The production-ready version of the app will be available in the dist directory.

## Assumptions, design decisions and trade-offs

### Assumptions:

- The initial data is provided and hardcoded in the project.
- The trade table should be centered in the browser.
- The user should be able to add, edit, and delete trades.
- The trade table should have a title, "Sample Trades".
- The trade table should have appropriate CSS styles.
- The trade table should display the trade price and trade volume with comma's separated every three digits and at most 2 decimal places.
- The trade table should have the ability to add a trade through a modal dialog.
- The trade table should have the ability to edit and delete trades through a context menu.

### Design decisions:
- Used TailwindCSS for faster development and using a consistent design system

### Trade-offs:

- The application is not fully functional on mobile devices, due to the MouseEvent that is triggering the context menu. To fix this, touch events should also be supported.

