/**
 * Deterministic animal avatars used to give each game a memorable identity.
 *
 * The mapping is based on the stable game id so avatars do not change between
 * builds or when the catalog is rendered in a different order.
 */

export interface AnimalAvatar {
    emoji: string;
    name: string;
}

const ANIMAL_AVATARS: readonly AnimalAvatar[] = [
    { emoji: '🦊', name: 'Fox' },
    { emoji: '🐻', name: 'Bear' },
    { emoji: '🐼', name: 'Panda' },
    { emoji: '🐨', name: 'Koala' },
    { emoji: '🦁', name: 'Lion' },
    { emoji: '🐯', name: 'Tiger' },
    { emoji: '🐸', name: 'Frog' },
    { emoji: '🐙', name: 'Octopus' },
];

export function getAnimalAvatar(gameId: number): AnimalAvatar {
    const index = Math.abs(Math.trunc(gameId)) % ANIMAL_AVATARS.length;
    return ANIMAL_AVATARS[index];
}
