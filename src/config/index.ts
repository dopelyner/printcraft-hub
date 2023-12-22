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
        ],
    },
]