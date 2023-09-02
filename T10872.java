package coding_test;

import java.util.Scanner;

public class T10872 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int a = sc.nextInt();
		int sum = 1;
		for(int i=1;i<=a;i++)
			sum = sum * i;
		System.out.println(sum);
	}
}
