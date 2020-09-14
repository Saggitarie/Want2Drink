import { schema, use } from 'nexus';
import { prisma } from 'nexus-plugin-prisma';

use(prisma({ features: { crud: true } }));

schema.objectType({
  name: 'User',
  definition(t) {
    t.string('id', { description: 'Id of the user' });
    t.string('username', { description: 'Name of the user' });
    t.string('password', { description: 'Encrypted password' });
    t.field('DrinkingLocation', {
      type: 'DrinkingLocation',
    });
    t.field('Profile', {
      type: 'Profile',
    });
  },
});

schema.objectType({
  name: 'DrinkingLocation',
  definition(t) {
    t.string('id', { description: 'Id of the Drinking location' });
    t.string('locationName', { description: 'Name of the Drinking Location' });
    t.float('longtitude', { description: 'Longtitude of the Drinking ' });
    t.float('latitude', { description: 'Latitude of the Drinking Location' });
    t.date('createdAt', { description: 'Time when the user started drinking' });
    t.string('userId', { description: 'Foreign key to User' });
    t.field('user', {
      type: 'User',
    });
  },
});

schema.objectType({
  name: 'Profile',
  definition(t) {
    t.string('id', { description: 'Id of the User Profile' });
    t.string('image', { description: 'IMG64 string for Profile Image' });
    t.field('user', {
      type: 'User',
    });
  },
});

schema.queryType({
  definition(t) {
    t.crud.user();
    t.crud.users();
  },
});

schema.mutationType({
  definition(t) {
    t.crud.createOneUser();
    t.crud.createOneDrinkingLocation();
    t.crud.createOneProfile();
  },
});
