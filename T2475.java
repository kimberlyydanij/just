package coding_test;

import java.util.Scanner;

public class T2475 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int sum = 0;
		for(int i=0;i<5;i++) {
			int data = sc.nextInt();
			sum += data * data; 
		}
		System.out.println(sum%10);
	}
}
