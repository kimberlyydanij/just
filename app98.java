package coding_test;

import java.util.Scanner;

public class T2738 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int a = sc.nextInt();
		int b = sc.nextInt();
		System.out.printf("%d %d",a,b);
				
		int[][] data;
		data = new int[a][b];
		for(int i=0;i<a;i++) {
			for(int j=0;j<b;j++) {
				data[i][j] = sc.nextInt();
				System.out.printf("%d %d %d",i, j, data[i][j]);
			}
			System.out.println();
		}
	}
}
