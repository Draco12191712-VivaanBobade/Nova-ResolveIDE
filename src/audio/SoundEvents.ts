
export const SoundEvents = {

    Startup: "startup",


    FileOpened: "file-opened",
    Save: "save",
    ProjectOpened: "project-opened",


    TabOpened: "tab-opened",
    PanelOpened: "panel-opened",
    PanelCleared: "panel-cleared",


    FormatDocument: "format-document",
    FoldCode: "fold-code",
    Undo: "undo",
    SuggestionAvailable: "suggestion-available",


    QuickFixAvailable: "quick-fix-available",
    QuickFixOpened: "quick-fix-opened",
    QuickFixApplied: "quick-fix-applied",


    TaskRunning: "task-running",
    TaskCancelled: "task-cancelled",


    BuildSuccess: "build-success",
    BuildFailed: "build-failed",


    TerminalBell: "terminal-bell",
    CommandSuccess: "command-success",


    SearchStarted: "search-started",

    CollaborationUserJoined: "collaboration-user-joined",
    CollaborationUserLeft: "collaboration-user-left",

    LineAdded: "line-added",
    LineDeleted: "line-deleted",
    LineModified: "line-modified",

    Success: "success",
    Warning: "warning",
    Error: "error",

    ActionRequired: "action-required",
    ExtensionInstalled: "extension-installed",
    Glitch: "glitch"
} as const;


export type SoundEvent =
    typeof SoundEvents[keyof typeof SoundEvents];