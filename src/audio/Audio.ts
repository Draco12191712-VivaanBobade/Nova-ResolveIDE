import soundManifest from "./soundmanifest.json";

interface SoundEntry {
  file: string;
  volume?: number;
}

interface SoundManifest {
  format_version: number;
  sounds: Record<string, SoundEntry>;
}

const manifest = soundManifest as SoundManifest;

export class AudioManager {
  private static volume = 1.0;
  private static muted = false;

  public static play(soundId: string): void {
    if (this.muted) {
      return;
    }

    const sound = manifest.sounds[soundId];

    if (!sound) {
      console.warn(`[AudioManager] Unknown sound "${soundId}"`);
      return;
    }

    const audio = new Audio(`/sounds/${sound.file}`);

    audio.volume = this.volume * (sound.volume ?? 1);

    audio.play().catch((error) => {
      console.error("[AudioManager] Failed to play sound:", error);
    });
  }

  public static setVolume(volume: number): void {
    this.volume = Math.max(0, Math.min(1, volume));
  }

  public static getVolume(): number {
    return this.volume;
  }

  public static setMuted(muted: boolean): void {
    this.muted = muted;
  }

  public static isMuted(): boolean {
    return this.muted;
  }
}
