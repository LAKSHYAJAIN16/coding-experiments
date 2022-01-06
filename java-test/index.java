class Person {
    public int age;
    public String firstname;
    public String lastname;
    public String favoriteSong;

    public Person(int age, String firstname, String lastname, String favoriteSong) {
        this.age = age;
        this.firstname = firstname;
        this.lastname = lastname;
        this.favoriteSong = favoriteSong;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getFavoriteSong() {
        return favoriteSong;
    }

    public void setFavoriteSong(String favoriteSong) {
        this.favoriteSong = favoriteSong;
    }

    @Override
    public String toString() {
        return firstname + " " + lastname + ", who is " + age + " years old, loves" + favoriteSong;
    }
}

class Main {
    public static void main(String[] args) {
        Person Jack = new Person(18, "Jack", "Spei", "BTS Butter");
        System.out.println(Jack.toString());
    }
}