import { createPinia, defineStore } from 'pinia'

export const mainStore = defineStore('main', {
  state: () => ({
    itemsList: [
      { id: 1, name: "Wireless Mouse", description: "Ergonomic and responsive", price: "$25.99", inStock: true },
      { id: 2, name: "Mechanical Keyboard", description: "Tactile switches with backlight", price: "$79.00", inStock: true },
      { id: 3, name: "HD Monitor", description: "24-inch full HD display", price: "$149.99", inStock: true },
      { id: 4, name: "USB-C Hub", description: "7-in-1 multiport adapter", price: "$39.50", inStock: true },
      { id: 5, name: "Laptop Stand", description: "Adjustable aluminum stand", price: "$29.95", inStock: true },
      { id: 6, name: "Noise-Canceling Headphones", description: "Wireless over-ear design", price: "$199.00", inStock: true },
      { id: 7, name: "Webcam 1080p", description: "HD video with stereo mic", price: "$59.99", inStock: false },
      { id: 8, name: "Portable SSD 1TB", description: "Fast external storage", price: "$119.00", inStock: true },
      { id: 9, name: "Smartphone Stand", description: "Desk holder for phones", price: "$14.99", inStock: true },
      { id: 10, name: "Bluetooth Speaker", description: "Compact and powerful sound", price: "$49.90", inStock: true },
      { id: 11, name: "LED Desk Lamp", description: "Dimmable with USB charging", price: "$34.95", inStock: false },
      { id: 12, name: "Wireless Charger", description: "Qi-certified fast charging pad", price: "$19.99", inStock: true },
      { id: 13, name: "Graphic Tablet", description: "Drawing pad for creatives", price: "$89.00", inStock: true },
      { id: 14, name: "Laptop Backpack", description: "Water-resistant, tech-friendly", price: "$45.00", inStock: true },
      { id: 15, name: "Streaming Microphone", description: "USB condenser mic", price: "$129.99", inStock: false },
      { id: 16, name: "Ergonomic Chair", description: "Supportive mesh design", price: "$249.00", inStock: true },
      { id: 17, name: "Cable Organizer", description: "Keep your desk tidy", price: "$9.99", inStock: false },
      { id: 18, name: "Monitor Light Bar", description: "Eye-care lighting for screens", price: "$32.50", inStock: true },
      { id: 19, name: "Mini Projector", description: "Portable home theater", price: "$99.99", inStock: false },
      { id: 20, name: "USB Desk Fan", description: "Quiet cooling solution", price: "$17.95", inStock: true }
    ]
  })
})

const pinia = createPinia()
export default pinia