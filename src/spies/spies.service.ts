import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSpyDto } from './dto/create-spy.dto';
import { UpdateSpyDto } from './dto/update-spy.dto';

@Injectable()
export class SpiesService {
  private spies = [
    { id: 1, name: 'Black Rain', level: 'Itns' },
    { id: 2, name: 'Pink Rain', level: 'ls' },
    { id: 3, name: 'Green Rain', level: 'Itns' },
    { id: 4, name: 'Purple Rain', level: 'Ipns' },
  ];

  //Method To Get All Spies
  getSpies(args?: { level: string }) {
    if (args.level) {
      return this.spies.filter((spy) => spy.level === args.level);
    }
    return this.spies;
  }

  // Method to Get a specific Spy
  getSpy(args: { id: number }) {
    try {
      const spy = this.spies.find((spy) => spy.id === args.id);
      if (!spy) {
        throw new Error('Spy not found');
      }
      return spy;
    } catch (error) {
      throw new NotFoundException('Spy not found');
    }
  }

  // Method To Create a new Spy
  createSpy(createSpyDto: CreateSpyDto) {
    const spy = { id: this.spies.length + 1, ...createSpyDto };
    this.spies.push(spy);
    return spy;
  }

  // Method To Update A Spy By Id
  updateSpy(args: { id: number; updateSpyDto: UpdateSpyDto }) {
    // Loop through the array of spies , update any that wants to be updated
    this.spies = this.spies.map((spy) => {
      // For each spy in the array, check if the 'id' matches the specified 'id'.
      if (Number(spy.id) === Number(args.id)) {
        // If the 'id' matches, create a new object by merging the current 'spy' and 'updateSpyDto'.
        return { ...spy, ...args.updateSpyDto };
      } else {
        // If the 'id' doesn't match, keep the original 'spy'.
        return spy;
      }
    });

    // return the exact spy we need after it may have been updated
    return this.getSpy({ id: args.id });
  }

  // Method To Delete A Spy By Id
  deleteSpy(args: { id: number }) {
    // get the exact object that needs to be removed
    const toBeRemoved = this.getSpy({ id: args.id });

    // go through the array and filter out the object that its id matches the given id, and update the spies variable with the updated array of fitered object
    this.spies = this.spies.filter((spy) => Number(spy.id) !== Number(args.id));

    // Return the exact data we removed
    return toBeRemoved;
  }
}
