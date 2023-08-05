package coding_test;

import java.util.Scanner;

public class T2440 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int a = sc.nextInt();
		sc.close();
		int b = a;
		for(int i = a;i > 0;i--) {
			for(int j = b; j > 0;j--)
			System.out.printf("*");
		b--; 
		System.out.println();}

	}
}
