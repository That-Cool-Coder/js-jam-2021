class ProgressManagement {
    static localStorageKey = `${config.gameName}highestLevelUnlocked`;
    
    static get highestLevelUnlocked() {
        return Number(localStorage.getItem(this.localStorageKey) || 1);
    }
    static hasUnlockedLevel(levelNum) {
        return (this.highestLevelUnlocked >= levelNum);
    }

    static unlockNextLevel() {
        this.unlockLevel(this.highestLevelUnlocked + 1);
    }

    static unlockLevel(levelNum) {
        // If levelNum is not unlocked already, unlock all before it
        if (this.highestLevelUnlocked <= levelNum) {
            localStorage.setItem(this.localStorageKey, levelNum);
        }
    }

    static lockLevelsAbove(levelNum) {
        localStorage.setItem(this.localStorageKey, levelNum);
    }

    static resetProgress() {
        this.lockLevelsAbove(1);
    }
}