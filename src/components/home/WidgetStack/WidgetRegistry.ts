import { UIIcons } from "../../../assets/icons/ui";

import {
    CommunityShowcaseWidget,
    ExtensionUpdatesWidget,
    FeaturedExtensionsWidget,
    NewsWidget,
    NotificationsWidget,
    SurpriseMeWidget,
} from "./widgets";

import type { WidgetDefinition } from "./widgetTypes";

export const widgets: WidgetDefinition[] = [
    {
        id: "news",
        title: "News",
        subtitle: "Latest announcements from Nova Resolve",
        icon: UIIcons.Announcements,
        component: NewsWidget,
        order: 0,
    },
    {
        id: "featured-extensions",
        title: "Featured Extensions",
        subtitle: "Discover hand-picked extensions",
        icon: UIIcons.Extensions,
        component: FeaturedExtensionsWidget,
        order: 1,
    },
    {
        id: "community-showcase",
        title: "Community Showcase",
        subtitle: "Featured creations from the community",
        icon: UIIcons.Effects,
        component: CommunityShowcaseWidget,
        order: 2,
    },
    {
        id: "notifications",
        title: "Notifications",
        subtitle: "Stay up to date",
        icon: UIIcons.Notifications,
        component: NotificationsWidget,
        order: 3,
    },
    {
        id: "extension-updates",
        title: "Extension Updates",
        subtitle: "Keep your extensions current",
        icon: UIIcons.Package,
        component: ExtensionUpdatesWidget,
        order: 4,
    },
    {
        id: "surprise-me",
        title: "Surprise Me",
        subtitle: "Discover something new",
        icon: UIIcons.Effects,
        component: SurpriseMeWidget,
        order: 5,
    },
];