export const PRODUCT_CATEGORIES = [
    {
        label: "Gadgets",
        value: "gadgets" as const,
        featured: [
            {
                name: "Gadgets",
                href: "/products",
                imageSrc: "/nav/gadgets/cable-holder.png"
            },
            // {
            //     name: "New Arrivals",
            //     href: "#",
            //     imageSrc: "/nav/ui-kits/blue.jpg"
            // },
            // {
            //     name: "Bestsellers",
            //     href: "#",
            //     imageSrc: "/nav/ui-kits/purple.jpg"
            // },
        ],
    },
    {
        label: "Household",
        value: "household" as const,
        featured: [
            {
                name: "Home Decor",
                href: "#",
                imageSrc: "/nav/household/foldable-stackable-crate.png"
            },
            // {
            //     name: "New Arrivals",
            //     href: "#",
            //     imageSrc: "/nav/icons/new.jpg"
            // },
            // {
            //     name: "Bestselling Icons",
            //     href: "#",
            //     imageSrc: "/nav/icons/bestsellers.jpg"
            // },
        ],
    },
]