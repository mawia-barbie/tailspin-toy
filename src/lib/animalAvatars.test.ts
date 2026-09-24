import { describe, expect, it } from 'vitest';
import { getAnimalAvatar } from './animalAvatars';

describe('getAnimalAvatar', () => {
    it('returns the same avatar for the same game id', () => {
        expect(getAnimalAvatar(12)).toEqual(getAnimalAvatar(12));
    });

    it('returns an avatar with an emoji and accessible animal name', () => {
        const avatar = getAnimalAvatar(1);

        expect(avatar.emoji).not.toBe('');
        expect(avatar.name).not.toBe('');
    });

    it('cycles through the available avatars for larger ids', () => {
        expect(getAnimalAvatar(1)).toEqual(getAnimalAvatar(9));
    });

    it('handles negative ids consistently', () => {
        expect(getAnimalAvatar(-1)).toEqual(getAnimalAvatar(1));
    });
});
