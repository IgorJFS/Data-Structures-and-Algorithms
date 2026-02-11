# Explicação: Fila onde elementos são removidos por prioridade (menor valor = maior prioridade aqui), não ordem de chegada.
# Propósito: Processar tarefas baseadas em importância/urgência.
# Big O: Inserção O(log n), Remoção O(log n).
# Exemplos Reais: Agendamento de CPU, algoritmo de Dijkstra (GPS), triagem de emergência.

import heapq

pq = []

heapq.heappush(pq, 8)
heapq.heappush(pq, 5)
heapq.heappush(pq, 2)


print(heapq.heappop(pq))
print(heapq.heappop(pq))
print(heapq.heappop(pq))
