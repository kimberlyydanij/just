package coding_test;

import java.util.Scanner;

public class T11021 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int a = sc.nextInt();
		for(int i = 1;i <= a;i++) {
			int b = sc.nextInt();
			int c = sc.nextInt();
			System.out.printf("\nCase #%d: %d + %d = %d",i,b,c,b+c);
		}
		sc.close();
	}
}
