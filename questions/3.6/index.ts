import { LinkedList } from "../../datastructures/linkedlist";
import { IQueue } from "../../datastructures/queue/IQueue";
import { Stack } from "../../datastructures/stack";

/**
 * : An animal shelter, which holds only dogs and cats, operates on a strictly"first in, first
 * out" basis. People must adopt either the "oldest" (based on arrival time) of all animals at the shelter,
 * or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of
 * that type). They cannot select which specific animal they would like. Create the data structures to
 * maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog,
 * and dequeueCat. You may use the built-in Linked list data structure.
 */
type TAnimal = "cat" | "dog";

export class AnimalShelter {
  animals = new LinkedList<TAnimal>();

  enqueue(animal: TAnimal) {
    this.animals.add(animal);
  }

  dequeueAny() {
    return this.animals.remove(this.animals.root?.content);
  }

  dequeueDog() {
    const result = this.animals.remove("dog");

    if (!result) {
      return this.animals.remove("cat");
    }

    return result;
  }

  dequeueCat() {
    const result = this.animals.remove("cat");

    if (!result) {
      return this.animals.remove("dog");
    }

    return result;
  }

  toString() {
    return this.animals.toString();
  }
}
