#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

struct Product {
    int id;
    string name;
    string category;
    int stock;
    double price;
};

vector<Product> products = {
    {1, "Laptop", "Electronics", 24, 55000},
    {2, "Wireless Mouse", "Accessories", 65, 799},
    {3, "Keyboard", "Accessories", 38, 1299},
    {4, "Office Chair", "Furniture", 12, 6500},
    {5, "Notebook", "Stationery", 90, 120}
};

void showInventory() {
    cout << "\n=== Inventory ===\n";
    for (const auto& p : products)
        cout << p.id << " | " << p.name << " | " << p.category
             << " | Stock: " << p.stock << " | Price: " << p.price << "\n";
}

void sellProduct(int id, int quantity) {
    for (auto& p : products) {
        if (p.id == id) {
            if (quantity <= p.stock) p.stock -= quantity;
            return;
        }
    }
}

void purchaseProduct(int id, int quantity) {
    for (auto& p : products) {
        if (p.id == id) {
            p.stock += quantity;
            return;
        }
    }
}

int main() {
    cout << "InventoryPro - C++ Inventory Management Module\n";
    showInventory();
    return 0;
}
