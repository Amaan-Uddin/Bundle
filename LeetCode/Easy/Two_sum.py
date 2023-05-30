'''
Given an array of integers nums and an integer target,
return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, 
and you may not use the same element twice.
'''

from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        
        indices = []
        current_elem = 0

        while(current_elem != len(nums)):
            difference = target - nums[current_elem]
            new_nums = nums[current_elem+1:]
            if (difference in new_nums):
                if(nums[current_elem] == difference):
                    indices.extend([current_elem,new_nums.index(difference) + current_elem + 1])
                else:
                    indices.extend([current_elem,nums.index(difference)])
                break

            current_elem += 1

        return indices

obj = Solution()
print(obj.twoSum([1,2,7,5],9)) # [1,2]
print(obj.twoSum([3,3],6)) # [0,1]
print(obj.twoSum([3,2,2,5],4)) # [1,2]
print(obj.twoSum([0,2,7,0,3,5],0)) # [0,3]