export interface GettingStartedItem {
    id: string;
    title: string;
    description: string;
    icon: string;
    action: string;
}

export const gettingStartedLinks: GettingStartedItem[] = [
    {
        id: "documentation",
        title: "Documentation",
        description: "Learn how to create projects and use Nova Resolve.",
        icon: "documentation",
        action: "openDocumentation",
    },
    {
        id: "discord",
        title: "Join Discord",
        description: "Chat with the Nova Resolve community.",
        icon: "discord",
        action: "openDiscord",
    },
    {
        id: "marketplace",
        title: "Extension Marketplace",
        description: "Browse community extensions.",
        icon: "marketplace",
        action: "openMarketplace",
    },
    {
        id: "whats-new",
        title: "What's New",
        description: "See the latest updates.",
        icon: "whats-new",
        action: "openWhatsNew",
    },
    {
        id: "mojo",
        title: "Learn About MoJo",
        description: "Read the MoJo language guide.",
        icon: "mojo",
        action: "openMojoGuide",
    },
    {
        id: "source",
        title: "View Source Code",
        description: "Explore Nova Resolve on GitHub.",
        icon: "github",
        action: "openSource",
    },
];