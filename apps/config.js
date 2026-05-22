// apps/config.js
// Global Configuration State Object
const config = {
    // Current application operational state
    systemActive: true,
    
    // Core administrative details
    version: "1.0.4",
    theme: "neon-orange-dark",
    
    // API endpoint paths
    endpoints: {
        statusCheck: "/api/destruct",
        executionPath: "/api/destruct"
    }
};

/**
 * Handles security check requests or state transitions
 * @param {string} action - The administrative command to pass
 * @returns {object} Updated status response
 */
function handleConfigAction(action) {
    if (action === "TERMINATE_SYSTEM") {
        config.systemActive = false;
        return { success: true, status: "destroyed", message: "System configuration flagged as inactive." };
    }
    
    if (action === "RESTORE_SYSTEM") {
        config.systemActive = true;
        return { success: true, status: "active", message: "System configuration restored." };
    }
    
    return { success: false, status: config.systemActive ? "active" : "destroyed", message: "Invalid action or status read only." };
}

// Export functions for both browser imports or Vercel Node runtime use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { config, handleConfigAction };
} else {
    window.AppConfig = config;
}
