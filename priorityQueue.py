import heapq

pq = []

heapq.heappush(pq, 8)
heapq.heappush(pq, 5)
heapq.heappush(pq, 2)


print(heapq.heappop(pq))
print(heapq.heappop(pq))
print(heapq.heappop(pq))
