package coding_test;

import java.util.Scanner;

public class T9086 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        System.out.println();
        for (int i = 0; i < a; i++) {
            String word = sc.next();
            System.out.println(word.charAt(0) + "" + word.charAt(word.length() - 1));
        }
        sc.close();
		}
	}
