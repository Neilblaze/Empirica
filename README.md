# Warrants Feature for Producers in the Marketplace 🛒

https://github.com/Neilblaze/Empirica/assets/48355572/6d914a14-8ed3-4f87-873f-9a3d195e3bba

<br/>

![dotted-bar-long](https://user-images.githubusercontent.com/48355572/263612162-32246a50-238b-48d7-aa6d-f1562b04ce3a.png)


## ⏺️ Planning the Feature

In developing the warrants feature, we approached the initial planning phase as a collaborative effort among the three of us (Myself, i.e. [Pratyay](https://github.com/neilblaze), [Veer](https://github.com/VP45) & [Archit](https://github.com/Archit1706)). We discussed the feature's requirements initially, identifying the key aspects that needed attention, considering both the user experience as well as the technical implementation.

<br/>

## 🔵 Key Questions

-   What would the warrants feature signify?
-   What would the coding approach towards it be?
-   How can we visually represent such a warrant and its specifications for the producers?
-   What changes could be made to the existing UI?

## 🔵 Logic and Code implementation

-   We initially had several doubts regarding how this feature would work in the given project since all of us weren't familiar with Empirica. However, over a couple of meetings, we figured out what would be ideally needed and what is feasible in the given timeframe for the warrants feature.
-   We created a simple workflow of how we wanted to add the feature to the codebase without changing much of the existing features, which would need a lot more debugging and understanding of the codebase such as how "`players`", "`rounds`", "`stages`" worked and their set of attributes.
-   We narrowed down the entire workflow to the phase where adding a warrant for the task should be done by having an existing list of products, with a set of quality attributes, their production prices, advertisement quality for the chosen product, their nominal selling prices, and now, adding a warrant to such a product which increases the selling price of the product and its overall profit generated based on the claim by the "producer" for the said warrant(s).
-   These choices are then reflected on the Sales Report Simulation, which lists the warrants chosen for the particular product and all its other specifications, along with the score (profit) generated from said number of sale units.

<br/>

## 🔵 Features

-   Made changes to the Chat User Interface for games having 2 players.
-   Made changes to the UI of the initial advertisement process.
-   Segmented the process into 4 phases. (Product Quality/Price Choice Phase, Advertisement Quality Phase, Selling Price Choice Phase, Add a warrant (Modal), Sales Report Simulation)
-   Added an "Add a warrant" feature to the 3rd phase which allowed the producer to add claims to a product which increases the profit of the product.
-   Made the entire process dynamic by creating a list of products beforehand, and changed the original static product(toothpaste) code to a dynamic process which will be helpful for future work when a backend is integrated with the product process.

<br/>

## 📝 References and Resources

- [UnoCSS](https://unocss.dev/interactive/)
- A rough workflow (can be seen below) for the entire advertisement process for the producer was laid out for a clear understanding of the features to be added along with their layout.

![Workflow](https://res.cloudinary.com/dutfy6mlc/image/upload/v1704891285/cu317iczgsqe2iw1nxdw.png)

<br/>

## 🔮 Future Work (Improvements)
Creating a much-standardized approach of the phases for products that have complex specifications such as electronic devices (Laptops, phones, etc.) where the producer has much more control over the price, quality (specifications), and warrant choices.

<br/>

## 🌈 Reflecting Real-World Marketplace

Our virtual marketplace's warrants feature closely mimics real-world market dynamics, providing an insight into the complexities and difficulties faced by producers and consumers. Above all, it improves accountability in real-world market situations. In reality, manufacturers frequently make audacious claims about their goods in advertising. Warrants instill a sense of accountability in the virtual marketplace by making producers financially liable for the veracity of their claims.

Furthermore, the presentation shared with us with regards to the concept of such a platform, helped us more in understanding why "liars" need to be dealt with, and not just the "lies", referring to the producers/advertisers who need to be punished for false claims, wherein currently the platform is held responsible for hosting such products, but with the idea of implementation of this platform, it allows the platform to shift the focus of these "lies" to the producer/advertiser, which have been deflecting such cases in the past.

Moreover, this characteristic replicates the competitive dynamics observed in actual markets. Our virtual marketplace promotes a similar atmosphere of healthy competition, just as rivals in a physical marketplace have an incentive to refute misleading claims. Because of this, there is a dynamic market where being truthful is valued, which helps create a dynamic market where truthfulness becomes a valuable currency, contributing to the authenticity of the experience.

Warrants empower users as well, addressing a common weakness that arises when consumers assess product claims. It might be difficult for customers to determine whether these claims are accurate in the real world. With the warrants feature, users can question and challenge advertisements, giving them a more intelligent way to navigate the marketplace. For instance, if a toothpaste manufacturer states that their product offers "24-Hour Odor Protection," customers may contest the warrant if they believe this to be deceptive.

There are compromises involved in putting such a feature into practice. Achieving the ideal balance between functionality and user-friendliness is essential. An enjoyable virtual marketplace experience requires an intuitive interface, but this shouldn't come at the expense of the richness and genuineness that the warrants feature seeks to offer.

<br/>

## 🖼️ Screenshots

![Screenshots](https://res.cloudinary.com/dutfy6mlc/image/upload/v1704893397/qrg3e9hfk7ramjgngwqu.png)

---

<br/>

## 🛠️ Installation

> [!NOTE]  
> Empirica requires [Node.js](https://nodejs.org) to run. `Git clone` this repo on your local. Once done, move into the `client` directory and install the dependencies. Then move to `server` directory and repeat the same process. Once these two steps are complete, come back to the base directory and run `empirica` command to start the app. Steps are mentioned below.

-   Client

    -   `cd client` - cd into client directory
    -   `npm install` - install client-side dependencies

-   Server

    -   `cd server` - cd into the server directory
    -   `npm install` - install server-side dependencies

-   Run the app
    -   `empirica` - Run in the root directory of the project

