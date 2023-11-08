package cloudVandana;

import java.util.Random;

public class ShuffleArray {
	public static void main(String[] args) {
		int[] arr = { 1, 2, 3, 4, 5, 6, 7 };
		shuffleArray(arr);
		for (int num : arr) {
			System.out.print(num + " ");
		}
	}

	public static void shuffleArray(int[] array) {
		Random r = new Random();
		for (int i = array.length - 1; i > 0; i--) {
			int j = r.nextInt(i + 1);

			int temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
	}
}
