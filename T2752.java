package coding_test;

import java.util.Scanner;

public class T2752 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int a[] = new int[3];
		int temp = 0;
		for (int i = 0; i < 3; i++) {
			a[i] = sc.nextInt();
		}
		sc.close();

		for (int j = 0; j < 2; j++) {
			for (int x = j + 1; x < 3; x++) {
				if (a[j] > a[x]) {
					temp = a[j];
					a[j] = a[x];
					a[x] = temp;
				}
			}
		}

		System.out.printf("%d %d %d", a[0], a[1], a[2]);
	}

}

