package coding_test;

import java.util.Scanner;

public class T2480 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int a = sc.nextInt();
		int b = sc.nextInt();
		int c = sc.nextInt();
		sc.close();
		int sum = 0;
		int max = 0;
		if(max < a) max = a;
		if(max < b) max = b;
		if(max < c) max = c;
		if(a==b && b==c)
			sum = (a*1000) + 10000;
		else if ((a==b && b!=c) || (a==c && a!=b))
			sum = (a*100) + 1000;
		else if (a!=b && b==c)
			sum = (b*100) + 1000;
		else sum = max * 100;
		System.out.println(sum);
	}
}
