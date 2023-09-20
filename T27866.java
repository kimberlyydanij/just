package coding_test;

import java.util.Scanner;

public class T27866 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String a = sc.next();
		int b = sc.nextInt();
		sc.close();
		int c = a.length();
		char d[] = new char[c];
		for(int i = 0;i < c; i++) {
			d[i] = a.charAt(i);
		}
		System.out.println(d[b-1]);
	}
}
