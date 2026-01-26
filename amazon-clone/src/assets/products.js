import basicsBattery1 from './battery1.jpg'
import basicsBattery2 from './battery2.jpg'
import basicsBattery3 from './battery3.jpg'
import basicsBattery4 from './battery4.jpg'
import basics2Battery1 from './battery2-1.jpg'
import basics2Battery2 from './battery2-2.jpg'
import basics2Battery3 from './battery2-3.jpg'
import basics2Battery4 from './battery2-4.jpg'
import plates1 from './plates-1.jpg'
import plates2 from './plates-2.jpg'
import plates3 from './plates-3.jpg'
import plates4 from './plates-4.jpg'
import cable1 from './cable-1.jpg'
import cable2 from './cable-2.jpg'
import cable3 from './cable-3.jpg'
import cable4 from './cable-4.jpg'
import stand1 from './stand-1.jpg'
import stand2 from './stand-2.jpg'
import stand3 from './stand-3.jpg'
import stand4 from './stand-4.jpg'
import charge1 from './charge-1.jpg'
import charge2 from './charge-2.jpg'
import charge3 from './charge-3.jpg'
import charge4 from './charge-4.jpg'
import pack1 from './pack1.jpg'
import pack2 from './pack2.jpg'
import pack3 from './pack3.jpg'
import pack4 from './pack4.jpg'
import chair1 from './chair-1.jpg'
import chair2 from './chair-2.jpg'
import chair3 from './chair-3.jpg'
import chair4 from './chair-4.jpg'
import towel1 from './towel-1.jpg'
import towel2 from './towel-2.jpg'
import towel3 from './towel-3.jpg'
import towel4 from './towel-4.jpg'
import keyboard1 from './keyboard-1.jpg'
import keyboard2 from './keyboard-2.jpg'
import keyboard3 from './keyboard-3.jpg'
import keyboard4 from './keyboard-4.jpg'


const productInventory = {
  products: [
    {
      id: 'amazonbasics',
      name: 'Amazon Basics AAA Alkaline High-Performance Batteries (36-Pack)',
      price: '13.70',
      rating: 4.5,
      photos: {
        img1: basicsBattery1,
        img2: basicsBattery2,
        img3: basicsBattery3,
        img4: basicsBattery4,
      },
      about: [
        {
          description:
            'IN THE BOX: 36-pack of 1.5 volt AAA alkaline batteries for reliable performance across a wide range of devices'
        },
        {
          description:
            'DEVICE COMPATIBLE: Ideal for game controllers, toys, flashlights, digital cameras, clocks, and more'
        },
        {
          description:
            'DESIGNED TO LAST: 10-year leak-free shelf life; store for emergencies or use right away'
        },
        {
          description:
            'EASY USE & STORAGE: Ships in easy-to-open packaging'
        },
        {
          description:
            'SINGLE USE: These batteries are NOT rechargeable; for rechargeable options, check out Amazon Basics rechargeable batteries'
        },
        {
          description:
            'For frequent/professional/industrial use, check out Amazon Basics Industrial AAA batteries.'
        },
      ]
    },
    {
      id: 'amazonbasics',
      name: 'Amazon Basics AA Alkaline High-Performance Batteries (48-Pack)',
      price: '18.45',
      rating: 3.5,
      photos: {
        img1: basics2Battery1,
        img2: basics2Battery2,
        img3: basics2Battery3,
        img4: basics2Battery4,
      },
      about: [
        {
          description:
            'IN THE BOX: 48-pack of 1.5 volt AA alkaline batteries for reliable performance across a wide range of devices'
        },
        {
          description:
            'DEVICE COMPATIBLE: Ideal battery for game controllers, toys, flashlights, digital cameras, clocks, and more'
        },
        {
          description:
            'DESIGNED TO LAST: 10-year leak-free shelf life; store for emergencies or use right away'
        },
        {
          description:
            'EASY USE & STORAGE: Ships in Certified Frustration-Free Packaging; easy to open and store extras for later use'
        },
        {
          description:
            'SINGLE USE: These batteries are NOT rechargeable; for rechargeable options, check out Amazon Basics rechargeable batteries'
        },
        {
          description:
            'For frequent/professional/industrial use, check out Amazon Basics Industrial AA batteries.'
        }
      ]
    },
    {
      id: 'amazonbasics',
      name: 'Amazon Basics Everyday Paper Plates, 8.62 Inch, Disposable (100 Count)',
      price: '5.99',
      rating: 4.5,
      photos: {
        img1: plates1,
        img2: plates2,
        img3: plates3,
        img4: plates4,
      },
      about: [
        {
          description:
            'SHIPMENT CONTAINS: 100 disposable paper plates measuring 8.62 inches, perfect for dinner, everyday meals, parties and picnics'
        },
        {
          description:
            'DURABLE DESIGN: Microwave-safe, soak proof, and cut resistant plates that hold up to a variety of foods without bending or leaking'
        },
        {
          description:
            'VERSATILE USE: Ideal for quick meals, family gatherings, outdoor events, and everyday convenience when you want to minimize cleanup'
        },
        {
          description:
            'SFI: Sustainable Forestry Initiative (SFI) certified dishware plate (SFI-01675)'
        },
        {
          description:
            'CONVENIENT SIZE: The 8.62 inch diameter provides ample space for serving meals while remaining easy to handle'
        },
        {
          description:
            'PACKAGING MAY VARY: Packaging may be different than what is shown but item and quality remain the same'
        },
      ]
    },
    {
      id: 'amazonbasics',
      name: 'Amazon Basics High-Speed HDMI Cable (6 Feet)',
      price: '8.99',
      rating: 2.5,
      photos: {
        img1: cable1,
        img2: cable2,
        img3: cable3,
        img4: cable4,
      },
      about: [
        {
          description:
            'IN THE BOX: HDMI cable (A Male to A Male) for connecting 2 HDMI-enabled devices; 6 feet long in Black'
        },
        {
          description:
            'DEVICE COMPATIBLE: Connects Blu-ray players, Fire TV, Apple TV, PS4, PS3, Xbox One, Xbox 360, and computers to TVs, displays, A/V receivers, and more'
        },
        {
          description:
            'SUPPORTS 4K VIDEO: Supports 4K video at 60 Hz, 2160p, 48-bit/px color depth, as well as bandwidth up to 18Gbps, Ethernet, 3D, and Audio Return Channel (ARC)'
        },
        {
          description:
            'EASY CONNECTION: Share an Internet connection among multiple devices (no need for a separate Ethernet cable)'
        },
        {
          description:
            'BACKWARDS COMPATIBLE: Works with earlier versions to allow for use with a wide range of HDMI-enabled devices'
        },
        {
          description:
            'NOTE: This cable supports up to 4K@60Hz, so if a connected devices output is higher than that standard, the cable wont work properly'
        }
      ]
    },
    {
      id: 'amazonbasics',
      name: 'Amazon Basics Adjustable Laptop Stand',
      price: '33.50',
      rating: 3.5,
      photos: {
        img1: stand1,
        img2: stand2,
        img3: stand3,
        img4: stand4,
      },
      about: [
        {
          description:
            'Ergonomic Height Adjustment: The laptop stand achieves personalized comfort with up to 7 inches of height adjustment, improving posture for extended laptop use at home or in the office'
        },
        {
          description:
            'Universal Compatibility: The laptop riser accommodates tablets and laptops from 10 to 17.3 inches, including popular models like MacBook, MacBook Air, MacBook Pro, Surface Laptop, Dell XPS, Google Pixelbook, HP, ASUS, Acer, Chromebook, Alienware, etc.'
        },
        {
          description:
            'Sturdy and Durable Construction: Crafted from lightweight, rust-resistant aluminum with a loading capacity of 11 lbs (5 kgs), featuring non-slip silicone pads and protective hooks to securely hold your laptop in place'
        },
        {
          description:
            'Enhanced Ventilation: Large hollow design facilitates superior airflow and heat dissipation, keeping your laptop cool even during intensive tasks, ideal for maintaining optimal performance'
        },
        {
          description:
            'Portable and Space-Saving: Folds flat for convenient storage and easy portability, fitting effortlessly into a laptop bag. When folded, the dimensions are 10 x 8.7 x 1.8 inches (LxWxH), and it weighs only 1.7 lbs (0.77 kg), perfect for on-the-go professionals.'
        },
      ]
    },
    {
      id: 'amazonbasics',
      name: 'Amazon Basics USB-C to USB-A Cable (3 Feet)',
      price: '7.25',
      photos: {
        img1: charge1,
        img2: charge2,
        img3: charge3,
        img4: charge4,
      },
      about: [
        {
          description:
            'USB-IF Certified, connects any USB-C to any standard USB-A enabled devices. For power transfer/charging smartphones, power banks, wall/car chargers, and low-power devices. Suitable for data transfer between smartphones, tablets, laptops, hard drives and more'
        },
        {
          description:
            'In the box: 1 cable, 3 foot 15W USB-C 2.0 to USB-A cable for charging and powering devices, transfering data, photos, and music'
        },
        {
          description:
            'Fast Charge and Data Transfer: Supports fast charging up to 15W (5V/3A) and data transfer speeds up to 480 Mbps. Do not exceed recommended load (15W, 5V/3A). Limited charging speed for PD enabled devices'
        },
        {
          description:
            'Backed by an Amazon Basics 1-Year Limited Warranty'
        }
      ]
    },
    {
      id: 'amazonbasics',
      name: 'Amazon Basics Mid-Back Mesh Office Chair',
      price: '89.99',
      photos: {
        img1: chair1,
        img2: chair2,
        img3: chair3,
        img4: chair4,
      },
      about: [
        {
          description:
            'Mid-back office desk chair; ideal for home office, work station, or conference room'
        },
        {
          description:
            'Pneumatic seat-height adjustment and 360 degree swivel for easy multi-tasking'
        },
        {
          description:
            '275-pound maximum weight capacity; 5 point base for stability; BIFMA certified'
        },
        {
          description:
            'Contoured breathable mesh back, padded seat, and curved armrests for comfort; dual-wheel casters for easy movability'
        },
        {
          description:
            'To ensure proper assembly, please follow all steps provided in the User Manual (PDF below)'
        },
        {
          description:
            'Product Dimensions: 26.38 x 26.25 x 35.38- 40.25 inches (WxDxH)'
        }
      ]
    },
    {
      id: 'amazonbasics',
      name: 'Amazon Basics Slim Carry On Travel Backpack',
      price: '45.00',
      photos: {
        img1: pack1,
        img2: pack2,
        img3: pack3,
        img4: pack4,
      },
      about: [
        {
          description:
            'EXPANDABLE STORAGE: Experience the ultimate convenience with the carry on backpack with expandable storage, allowing you to pack more without sacrificing comfort or organization'
        },
        {
          description:
            'LIGHTWEIGHT DURABILITY: This carry on bag is crafted from durable polyester, providing a lightweight yet robust backpack'
        },
        {
          description:
            'MULTIPLE CARRY OPTIONS: Offers versatility with multiple ways to carry, either as a backpack or shoulder bag, complete with strategically placed exterior handles'
        },
        {
          description:
            'SMART ORGANIZATION: Stay organized with this travel backpack featuring a main compartment with zippered mesh space, optional midway shelf, and compression straps for secure packing'
        },
        {
          description:
            'EASY ACCESS POCKETS: Comes with thoughtfully placed front and front-top pockets allowing quick access to travel essentials during transit'
        },
      ]
    },
    {
      id: 'amazonbasics',
      name: 'Amazon Basics 2-Ply Paper Towels (6 Rolls)',
      price: '11.80',
      photos: {
        img1: towel1,
        img2: towel2,
        img3: towel3,
        img4: towel4,
      },
      about: [
        {
          description:
            'SHIPMENT CONTAINS: 6 rolls with 150 2-ply sheets per roll, 900 total sheets for all your cleaning needs'
        },
        {
          description:
            'GREAT VALUE: Designed to provide effective cleaning performance at a budget-friendly price'
        },
        {
          description:
            'SC-CERTIFIED PAPER TOWEL (FSC N004130): Made with materials from well-managed forests, recycled materials, and/or other controlled wood sources'
        },
        {
          description:
            'LESS LINT: These paper towels lint less making them great for cleaning hard surfaces like mirrors, glass, and countertops'
        },
        {
          description:
            'FLEX-SHEETS: Select the size you need for any task; waste less and save more with customizable sheet sizes'
        },
        {
          description:
            'EVERYDAY SOLUTION: Perfect for tackling spills, kitchen messes, and general household cleaning with reliable absorbency'
        },
      ]
    },
    {
      id: 'amazonbasics',
      name: 'Amazon Basics Wired Keyboard and Mouse Combo',
      price: '19.95',
      photos: {
        img1: keyboard1,
        img2: keyboard2,
        img3: keyboard3,
        img4: keyboard4,
      },
      about: [
        {
          description:
            'Low-profile keys provide a quiet, comfortable typing experience'
        },
        {
          description:
            'Hotkeys enable easy access for Media, My Computer, mute, volume down, volume Up, and calculator; 4 function keys control previous track, Stop, Play/Pause, Next track on your media player'
        },
        {
          description:
            'Simple wired USB connection; works with Windows 2000, XP, Vista, 7, 8, 10 and later'
        },
        {
          description:
            'Smooth, precise and affordable USB-connected 3-button optical mouse for the desktop PC'
        },
        {
          description:
            'High-definition (1000 dpi) optical tracking enables responsive cursor control for precise tracking and easy text selection'
        }
      ]
    }
  ]
};
