package coding_test;

import java.util.Scanner;

public class T1264 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        char[] check = {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'};
        while (sc.hasNext()) {
            int sum = 0;
            String a = sc.nextLine();
            if (a.equals("#")) break;
            char[] data = a.toCharArray();
            for (int i = 0; i < a.length(); i++) {
                for (int j = 0; j < 10; j++) {
                    if (data[i] == check[j])
                        sum++;
                }
            }
            System.out.println(sum);
        }
        sc.close();
    }
}
