const STORAGE_KEY = 'stockflow_inventory_v1';

const seedData = {
  products: [
    {id:'P001',name:'Laptop',category:'Computers',supplier:'TechSource Pvt Ltd',purchasePrice:52000,sellingPrice:62000,quantity:18,minStock:5,description:'14-inch business laptop with 16GB RAM.'},
    {id:'P002',name:'Keyboard',category:'Accessories',supplier:'TechSource Pvt Ltd',purchasePrice:650,sellingPrice:999,quantity:42,minStock:10,description:'Wireless ergonomic keyboard.'},
    {id:'P003',name:'Mouse',category:'Accessories',supplier:'Digital Hub Supplies',purchasePrice:350,sellingPrice:599,quantity:65,minStock:15,description:'Wireless optical mouse.'},
    {id:'P004',name:'Monitor',category:'Displays',supplier:'Vision Electronics',purchasePrice:7800,sellingPrice:9999,quantity:8,minStock:8,description:'24-inch Full HD IPS monitor.'},
    {id:'P005',name:'Headphones',category:'Audio',supplier:'Digital Hub Supplies',purchasePrice:1100,sellingPrice:1799,quantity:27,minStock:7,description:'Over-ear noise-isolating headphones.'},
    {id:'P006',name:'USB Cable',category:'Accessories',supplier:'Digital Hub Supplies',purchasePrice:120,sellingPrice:249,quantity:92,minStock:20,description:'USB-C fast charging/data cable.'},
    {id:'P007',name:'Printer',category:'Office',supplier:'OfficeTech India',purchasePrice:12500,sellingPrice:15999,quantity:4,minStock:5,description:'All-in-one wireless inkjet printer.'},
    {id:'P008',name:'Webcam',category:'Accessories',supplier:'Vision Electronics',purchasePrice:1800,sellingPrice:2499,quantity:0,minStock:5,description:'1080p USB webcam with microphone.'}
  ],
  suppliers: [
    {id:'S001',name:'TechSource Pvt Ltd',phone:'+91 98765 43210',email:'sales@techsource.example',address:'Pune, Maharashtra'},
    {id:'S002',name:'Digital Hub Supplies',phone:'+91 98220 11223',email:'orders@digitalhub.example',address:'Mumbai, Maharashtra'},
    {id:'S003',name:'Vision Electronics',phone:'+91 97655 44332',email:'support@vision.example',address:'Pune, Maharashtra'},
    {id:'S004',name:'OfficeTech India',phone:'+91 98100 77889',email:'hello@officetech.example',address:'New Delhi, India'}
  ],
  categories: [
    {id:'C001',name:'Computers'},{id:'C002',name:'Accessories'},{id:'C003',name:'Displays'},{id:'C004',name:'Audio'},{id:'C005',name:'Office'}
  ],
  sales: [
    {id:'SL001',productId:'P001',quantity:1,total:62000,date:'2026-11-16T11:30:00'},
    {id:'SL002',productId:'P003',quantity:4,total:2396,date:'2026-11-16T15:10:00'},
    {id:'SL003',productId:'P005',quantity:2,total:3598,date:'2026-11-15T13:25:00'},
    {id:'SL004',productId:'P002',quantity:3,total:2997,date:'2026-11-14T10:05:00'},
    {id:'SL005',productId:'P006',quantity:10,total:2490,date:'2026-11-13T17:42:00'}
  ],
  purchases: [
    {id:'PU001',supplierId:'S001',items:[{productId:'P001',quantity:5,unitPrice:52000}],total:260000,date:'2026-11-12T09:20:00'},
    {id:'PU002',supplierId:'S002',items:[{productId:'P006',quantity:40,unitPrice:120},{productId:'P003',quantity:20,unitPrice:350}],total:11800,date:'2026-11-10T14:00:00'},
    {id:'PU003',supplierId:'S003',items:[{productId:'P004',quantity:5,unitPrice:7800}],total:39000,date:'2026-11-08T12:10:00'}
  ]
};

function deepClone(obj){ return JSON.parse(JSON.stringify(obj)); }
function loadDB(){
  const raw = localStorage.getItem(STORAGE_KEY);
  if(!raw){ const fresh=deepClone(seedData); localStorage.setItem(STORAGE_KEY, JSON.stringify(fresh)); return fresh; }
  try{return JSON.parse(raw);}catch{const fresh=deepClone(seedData);localStorage.setItem(STORAGE_KEY,JSON.stringify(fresh));return fresh;}
}
function saveDB(db){ localStorage.setItem(STORAGE_KEY, JSON.stringify(db)); }
function resetDB(){ localStorage.removeItem(STORAGE_KEY); location.reload(); }
