class Animal {
    public void animalSound() {
        System.out.println("animal create sound");
    }
};

class Dog extends Animal {
    public void animalSound() {
        System.out.println("dog say bhow bhow");
    }
}

class Monkey extends Animal {
    public void animalSound() {
        System.out.println("monkey say khow khow");
    }
}

public class Polymorphism {
    public static void main(String[] args) {
        Animal myAnimal = new Animal();
        Animal myMonkey = new Monkey();
        Animal myDog = new Dog();

        myAnimal.animalSound();
        myMonkey.animalSound();
        myDog.animalSound();

    }
}

