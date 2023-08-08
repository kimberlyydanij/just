package coding_test;

import java.util.Scanner;

public class T5341 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int a = 1;
		while(a!=0) {
			a = sc.nextInt();
			int sum = 0;
			for(int i = 1;i <= a;i++) {
				sum += i;
			}
			if(sum!=0) System.out.println(sum);
		}
		sc.close();
	}
}
