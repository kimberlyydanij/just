package coding_test;

import java.util.Scanner;

public class T10952 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int a = 0;
		int b = 0;
		do {
			a = sc.nextInt();
			b = sc.nextInt();
			if(a+b>0)
				System.out.println(a+b);
		} while (a+b!=0);
		}
}