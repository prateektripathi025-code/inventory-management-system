# StockFlow — Inventory Management System

A complete college-project-friendly inventory management web app built with HTML, CSS and vanilla JavaScript. It uses LocalStorage as a lightweight client-side database and works without a backend.

## Demo login
- Username: `admin`
- Password: `admin123`

## Folder structure

```text
inventory-management-system/
├── index.html
├── README.md
├── css/
│   └── style.css
└── js/
    ├── data.js
    └── app.js
```

## Run in VS Code

1. Open the `inventory-management-system` folder in VS Code.
2. Install the **Live Server** extension (recommended).
3. Right-click `index.html` → **Open with Live Server**.
4. Sign in with the demo credentials above.

You can also open `index.html` directly in a modern browser, although Live Server is better for development.

## Major modules

- **Authentication:** demo admin login with validation and sessionStorage login state.
- **Dashboard:** live product/stock/value KPIs, recent transactions and pure-canvas charts.
- **Products:** add/edit/delete/search/filter products with stock status.
- **Sales:** create sales, validate available stock, automatically reduce inventory and save history.
- **Purchases:** record incoming stock and automatically increase inventory.
- **Suppliers:** supplier CRUD plus protection against deleting suppliers assigned to products.
- **Categories:** category CRUD and product counts.
- **Reports:** inventory, low stock, best sellers and category-wise stock plus CSV exports.
- **Persistence:** all data is stored in LocalStorage under `stockflow_inventory_v1`.

## Important workflows

### Sale
Create Sale → choose product → enter quantity → system checks available stock → stock decreases → sale history updates → dashboard KPIs update.

### Purchase
Record Purchase → choose supplier/product → enter quantity and unit price → stock increases → purchase history updates → dashboard KPIs update.

### Low stock
A product is **Low Stock** when `quantity > 0` and `quantity <= minimum stock level`. It becomes **Out of Stock** when quantity reaches zero.

## Reset sample data

Open the browser developer console and run:

```js
localStorage.removeItem('stockflow_inventory_v1');
location.reload();
```

## Notes for a college submission

This is intentionally backend-free. For a production deployment, replace the LocalStorage data layer with a REST API and a database, hash passwords server-side, add role-based access control, and add server-side validation/auditing.
