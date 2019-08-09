import java.util.ArrayList;
import java.util.List;

interface Observer{
    void update(String str);
}

interface Publisher{
    void notify(String str);
    void add(Observer obs);
}

class newsMachine implements Publisher{
    List<Observer> observers = new ArrayList<>();
    
    public void notify(String str){
        for(Observer obs : observers){
            obs.update(str);
        }
    }
   public  void add(Observer obs){
        observers.add(obs);
    }
}

class subscriber implements Observer{
    Publisher pub;
    public subscriber(Publisher pub){
        this.pub = pub;
        pub.add(this);
    }
    // String title;
    public void update(String str){
        System.out.println(str);
    }
}

public class driver{
    public static void main(String[] args){
        newsMachine magazine = new newsMachine();
        subscriber subs = new subscriber(magazine);
        subscriber subs2 = new subscriber(magazine);

        magazine.notify("news!");
    }
}