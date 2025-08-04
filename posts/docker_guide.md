本文件提供 Docker 常用語法與說明，包含基本指令、Dockerfile 語法、容器操作等，適用於開發與部署流程。

---

## Docker 基本指令

```bash
# 檢查 Docker 是否安裝
docker --version

# 顯示系統資訊
docker info

# 顯示所有指令
docker help
```

---

## 容器操作

```bash
# 建立並啟動容器
docker run [OPTIONS] IMAGE [COMMAND] [ARG...]

# 常見選項
docker run -d -p 80:80 --name mycontainer nginx

# 查看運行中的容器
docker ps

# 查看所有容器（包含停止）
docker ps -a

# 停止容器
docker stop [CONTAINER_ID]

# 啟動容器
docker start [CONTAINER_ID]

# 移除容器
docker rm [CONTAINER_ID]

# 查看容器日誌
docker logs [CONTAINER_ID]

# 進入容器
docker exec -it [CONTAINER_ID] /bin/bash
```

---

## 映像檔操作

```bash
# 下載映像檔
docker pull nginx

# 建立映像檔
docker build -t myimage .

# 標記映像檔
docker tag myimage myrepo/myimage:1.0

# 上傳映像檔
docker push myrepo/myimage:1.0

# 查看映像檔
docker images

# 移除映像檔
docker rmi [IMAGE_ID]
```

---

## 資料卷 (Volumes)

```bash
# 建立 volume
docker volume create myvolume

# 查看 volumes
docker volume ls

# 將 volume 掛載到容器
docker run -v myvolume:/data nginx

# 移除 volume
docker volume rm myvolume
```

---

## 網路 (Networks)

```bash
# 建立網路
docker network create mynetwork

# 查看網路
docker network ls

# 加入網路
docker network connect mynetwork [CONTAINER_ID]

# 移除網路
docker network rm mynetwork
```

---

## Dockerfile 基本語法

```Dockerfile
# 使用基礎映像
FROM node:18

# 設定工作目錄
WORKDIR /app

# 複製檔案
COPY . .

# 安裝依賴
RUN npm install

# 暴露埠口
EXPOSE 3000

# 啟動指令
CMD ["node", "index.js"]
```

---

## docker-compose 基本語法

```yaml
version: "3"
services:
  web:
    image: nginx
    ports:
      - "80:80"
  app:
    build: .
    volumes:
      - .:/app
    ports:
      - "3000:3000"
```

---

建議搭配官方文件閱讀以獲得最新指令：[Docker Docs](https://docs.docker.com/)
