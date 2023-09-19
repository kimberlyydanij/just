package coding_test;

import java.util.Scanner;

public class T8545 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		StringBuffer sb = new StringBuffer(sc.next());
		sc.close();
		System.out.println(sb.reverse().toString());
	}
}
